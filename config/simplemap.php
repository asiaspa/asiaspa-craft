<?php


use craft\helpers\App;
use ether\simplemap\enums\MapTiles;
use ether\simplemap\enums\GeoService;


return [
    'mapTiles' => MapTiles::GoogleRoadmap,
    'mapToken' => App::env('GOOGLE_MAPS_API_KEY'),
    'geoService' => GeoService::GoogleMaps,
    'geoToken' => App::env('GOOGLE_MAPS_GEOSERVICE_KEY')
    // 'geoLocationService' => GeoLocationService::MaxMindLite,
    // 'geoLocationToken' => '',
];