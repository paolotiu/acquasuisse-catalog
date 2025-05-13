import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin
} from '@vis.gl/react-google-maps';

export function meta() {
  return [
    { title: "Acquasuisse - Branches" },
    { name: "description", content: "Acquasuisse" },
  ];
}

const CONFIGURATION = {
  "locations": [
    { key: 'operaHouse', location: { lat: -33.8567844, lng: 151.213108 } },
    { key: 'tarongaZoo', location: { lat: -33.8472767, lng: 151.2188164 } },
    { key: 'manlyBeach', location: { lat: -33.8209738, lng: 151.2563253 } },
    { key: 'hyderPark', location: { lat: -33.8690081, lng: 151.2052393 } },
    { key: 'theRocks', location: { lat: -33.8587568, lng: 151.2058246 } },
    { key: 'circularQuay', location: { lat: -33.858761, lng: 151.2055688 } },
    { key: 'harbourBridge', location: { lat: -33.852228, lng: 151.2038374 } },
    { key: 'kingsCross', location: { lat: -33.8737375, lng: 151.222569 } },
    { key: 'botanicGardens', location: { lat: -33.864167, lng: 151.216387 } },
    { key: 'museumOfSydney', location: { lat: -33.8636005, lng: 151.2092542 } },
    { key: 'maritimeMuseum', location: { lat: -33.869395, lng: 151.198648 } },
    { key: 'kingStreetWharf', location: { lat: -33.8665445, lng: 151.1989808 } },
    { key: 'aquarium', location: { lat: -33.869627, lng: 151.202146 } },
    { key: 'darlingHarbour', location: { lat: -33.87488, lng: 151.1987113 } },
    { key: 'barangaroo', location: { lat: - 33.8605523, lng: 151.1972205 } },
  ],
  "mapOptions": { "center": { lat: -33.860664, lng: 151.208138 }, "fullscreenControl": true, "mapTypeControl": false, "streetViewControl": false, "zoom": 13, "zoomControl": true, "maxZoom": 4, "mapId": "872d7b27e7bf50bf" },
  "mapsApiKey": "AIzaSyDXPzZ-PGY1SSK5L5IZrWKFMkDJ5OhA8PA",
  "capabilities": { "input": true, "autocomplete": true, "directions": false, "distanceMatrix": true, "details": false, "actions": false }
};

const gmpxStoreLocator = `
  gmpx-store-locator {
    width: 100%;
    height: 100%;

    /* These parameters customize the appearance of Locator Plus. See the documentation at
        https://github.com/googlemaps/extended-component-library/blob/main/src/store_locator/README.md
        for more information. */
    --gmpx-color-surface: #fff;
    --gmpx-color-on-surface: #212121;
    --gmpx-color-on-surface-variant: #757575;
    --gmpx-color-primary: #1967d2;
    --gmpx-color-outline: #e0e0e0;
    --gmpx-fixed-panel-width-row-layout: 28.5em;
    --gmpx-fixed-panel-height-column-layout: 65%;
    --gmpx-font-family-base: "Roboto", sans-serif;
    --gmpx-font-family-headings: "Roboto", sans-serif;
    --gmpx-font-size-base: 0.875rem;
    --gmpx-hours-color-open: #188038;
    --gmpx-hours-color-closed: #d50000;
    --gmpx-rating-color: #ffb300;
    --gmpx-rating-color-empty: #e0e0e0;
  }
`

const PoiMarkers = ({ pois }) => {
  return (
    <>
      {pois.map((poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}>
          <Pin glyphColor={'#fff'} />
        </AdvancedMarker>
      ))}
    </>
  );
};

export default function Branches() {
  return (
    <>
      <h1>Branches</h1>
      <div className='h-[500px]'>
        <APIProvider apiKey={CONFIGURATION.mapsApiKey} onLoad={() => console.log('Maps API has loaded.')}>
          <Map
            defaultZoom={CONFIGURATION.mapOptions.zoom}
            defaultCenter={CONFIGURATION.mapOptions.center}
            mapId={CONFIGURATION.mapOptions.mapId}
            onCameraChanged={(ev) =>
              console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
            }>
            <PoiMarkers pois={CONFIGURATION.locations} />
          </Map>
        </APIProvider>
      </div>
    </>
  )
}
