<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see craft\config\GeneralConfig
 */

use craft\helpers\App;

return [
    'aliases' => [
        '@assetsUrl' => App::env('ASSETS_URL'),
        '@imgixDefaultUrl' => App::env('IMGIX_DEFAULT_URL'),
        '@imgixExternalUrl' => App::env('IMGIX_EXTERNAL_URL'),
        '@web' => App::env('SITE_URL'),
        '@webroot' => App::env('WEB_ROOT_PATH'),
    ],
    'useProjectConfigFile' => (bool)App::env('USE_PROJECT_CONFIG_FILE'),
    'allowUpdates' => (bool)App::env('ALLOW_UPDATES'),
    'allowAdminChanges' => (bool)App::env('ALLOW_ADMIN_CHANGES'),
    'backupOnUpdate' => (bool)App::env('BACKUP_ON_UPDATE'),
    'devMode' => (bool)App::env('DEV_MODE'),
    'enableTemplateCaching' => (bool)App::env('ENABLE_TEMPLATE_CACHING'),
    'isSystemLive' => (bool)App::env('IS_SYSTEM_LIVE'),
    'resourceBasePath' => App::env('WEB_ROOT_PATH').'/cpresources',
    'runQueueAutomatically' => (bool)App::env('RUN_QUEUE_AUTOMATICALLY'),
    'securityKey' => App::env('SECURITY_KEY'),
    'siteUrl' => App::env('SITE_URL'),
    'siteName' => App::Env('SITE_NAME'),
        
    // Craft config settings from constants
    'cacheDuration' => false,
    'defaultSearchTermOptions' => [
        'subLeft' => true,
        'subRight' => true,
    ],
    'defaultTokenDuration' => 'P2W',
    'enableCsrfProtection' => true,
    'errorTemplatePrefix' => '_error/',
    // 'generateTransformsBeforePageLoad' => true,
    'maxCachedCloudImageSize' => 3000,
    'maxUploadFileSize' => '100M',
    'omitScriptNameInUrls' => true,
    // 'useEmailAsUsername' => true,
    'usePathInfo' => true,

    'dev' => [
        'backupCommand' => getenv('BACKUP_COMMAND'),
        'restoreCommand' => getenv('RESTORE_COMMAND'),
    ],
];

