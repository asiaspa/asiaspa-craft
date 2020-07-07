<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see craft\config\GeneralConfig
 */

return [
    '*' => [
        'useProjectConfigFile' => true,
        'defaultWeekStartDay' => 0,
        'enableCsrfProtection' => true,
        'omitScriptNameInUrls' => true,
        'cpTrigger' => 'admin',
        // SAME between local & hyperlane server
        'securityKey' => getenv('SECURITY_KEY'),

        // options
        // cache forever
        'cacheDuration' => 0,
        'siteName' => 'AsiaSpa',

        // Hyperlane defined aliases
        'aliases' => [
            '@assetBasePath' => getenv('ASSET_BASE_PATH'),
            '@assetPublicPath' => getenv('ASSET_PUBLIC_PATH')
        ]
    ],

    // 'dev' => [
    //     'siteUrl' => null,
    //     'devMode' => true,
    // ],

    // 'staging' => [
    //     'siteUrl' => null,
    // ],

    // 'production' => [
    //     'siteUrl' => null,
    //     // prevent conflict with project config
    //     'allowAdminChanges' => false,
    // ],

    'local' => [
        // 'siteUrl' => null,
        'devMode' => true
    ]
];
