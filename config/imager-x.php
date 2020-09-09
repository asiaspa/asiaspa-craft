<?php
/**
 * Imager-x Configuration

 *
 * @see https://imager-x.spacecat.ninja/configuration.html#general-configuration
 */

use craft\helpers\App;

 return [
    'transformer' => 'imgix',
    'useForNativeTransforms' => true,
    'useForCpThumbs' => true,
    'fillInterval' => 160,
    'imgixApiKey' => App::env('IMGIX_API_KEY'),
    'imgixProfile' => 'external',
    'imgixConfig' => [
        'default' => [
            'domain' => App::env('IMGIX_DEFAULT_URL'),
            'useHttps' => true,
            'signKey' => App::env('IMGIX_DEFAULT_SIGNKEY'),
            'sourceIsWebProxy' => false,
            'useCloudSourcePath' => true,
            'getExternalImageDimensions' => true,
            'defaultParams' => ['auto'=>'compress,format', 'q'=>80]
        ],
        'external' => [
            'domain' => App::env('IMGIX_EXTERNAL_URL'),
            'useHttps' => true,
            'signKey' => App::env('IMGIX_EXTERNAL_SIGNKEY'),
            'sourceIsWebProxy' => true,
            'useCloudSourcePath' => true,
            'getExternalImageDimensions' => true,
            'defaultParams' => ['auto'=>'compress,format', 'q'=>80],
        ]
    ],
    'storages' => ['gcs'],
    'storageConfig' => [
        'gcs' => [
            'keyFile' => App::env('GCS_KEY'),
            'bucket' =>  App::env('GCS_BUCKET'),
            'folder' => 'transforms'
        ]
    ]
];