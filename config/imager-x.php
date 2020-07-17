<?php
/**
 * Imager-x Configuration

 *
 * @see https://imager-x.spacecat.ninja/configuration.html#general-configuration
 */

 return [
     '*'  => [
        'transformer' => 'imgix',
        'useForCpThumbs' => true,
        'fillTransform' => 160,
        'imgixApiKey' => getenv('IMGIX_API_KEY'),
        'imgixConfig' => [
            'default' => [
                'domain' => 'asiaspa.imgix.net',
                'useHttps' => true,
                'signKey' => 'rR8eGFaeXzU763Yx',
                'sourceIsWebProxy' => false,
                'useCloudSourcePath' => true,
                'getExternalImageDimensions' => true,
                'defaultParams' => ['auto'=>'compress,format', 'q'=>80]
            ],
            'external' => [
                'domain' => 'asiaspa-external.imgix.net',
                'useHttps' => true,
                'signKey' => 'RvgwbW4JdG4uKPCK',
                'sourceIsWebProxy' => true,
                'useCloudSourcePath' => true,
                'getExternalImageDimensions' => true,
                'defaultParams' => ['auto'=>'compress,format', 'q'=>80],
            ]
        ],
        'storage' => 'gcs',
        'storageConfig' => [
            'gcs' => [
                'keyFile' => 'https://storage.googleapis.com/asiaspa/site/key/scenic-treat-283413-0ed11faff327.json',
                'bucket' => 'asiaspa',
                'folder' => 'trasnforms'
            ]
        ]
    ]
];