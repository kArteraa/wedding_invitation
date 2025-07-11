import { useEffect, useRef } from 'react';

export default function Map() {
    const mapRef = useRef(null);
    const mapInstance = useRef(null);

    useEffect(() => {
        const existingScript = document.querySelector('script[src*="api-maps.yandex.ru"]');

        // @ts-ignore
        if (!window.ymaps && !existingScript) {
            const script = document.createElement('script');
            script.src = 'https://api-maps.yandex.ru/2.1/?apikey=6929b07d-efba-4bce-bc33-7e3e72f01824&lang=ru_RU';
            script.async = true;
            // @ts-ignore
            script.onload = () => window.ymaps.ready(initMap);
            document.body.appendChild(script);
        } else {
            // @ts-ignore
            if (window.ymaps) {
                // @ts-ignore
                window.ymaps.ready(initMap);
            } else if (existingScript) {
                // @ts-ignore
                existingScript.addEventListener('load', () => window.ymaps.ready(initMap));
            }
        }

        function initMap() {
            if (!mapRef.current || mapInstance.current) return;

            // Create the map only if it doesn't exist
            // @ts-ignore
            mapInstance.current = new window.ymaps.Map(mapRef.current, {
                center: [48.7868, 44.7794], // Default coordinates (Volgograd area)
                zoom: 14,
            });

            // Then perform geocoding
            // @ts-ignore
            window.ymaps.geocode('ул. Мира, 125Б, Волжский, Волгоградская обл., Россия')
                // @ts-ignore
                .then((res) => {
                    const firstGeoObject = res.geoObjects.get(0);
                    const coords = firstGeoObject.geometry.getCoordinates();

                    // Update map center
                    // @ts-ignore
                    mapInstance.current.setCenter(coords);

                    // Clear previous placemarks if any
                    // @ts-ignore
                    mapInstance.current.geoObjects.removeAll();

                    // Add placemark
                    // @ts-ignore
                    const placemark = new window.ymaps.Placemark(coords, {
                        hintContent: 'ул. Мира, 125Б',
                        balloonContent: 'Волжский, Волгоградская область',
                    });
                    // @ts-ignore
                    mapInstance.current.geoObjects.add(placemark);
                })
                // @ts-ignore
                .catch((error) => {
                    console.error('Geocoding failed:', error);
                    // Fallback placemark at default coordinates
                    // @ts-ignore
                    const placemark = new window.ymaps.Placemark([48.7868, 44.7794], {
                        hintContent: 'ул. Мира, 125Б',
                        balloonContent: 'Волжский, Волгоградская область',
                    });
                    // @ts-ignore
                    mapInstance.current.geoObjects.add(placemark);
                });
        }

        return () => {
            if (mapInstance.current) {
                // @ts-ignore
                mapInstance.current.destroy();
                mapInstance.current = null;
            }
        };
    }, []);

    return (
        <div
            ref={mapRef}
            style={{ width: '100%', height: '500px', marginBottom: 100}}
        />
    );
}