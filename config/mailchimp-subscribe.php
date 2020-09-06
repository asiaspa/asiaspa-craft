<?php

use craft\helpers\App;

return [
    'apiKey' => app::env('MAILCHIMP_KEY'),
    'audienceId' => app::env('MAILCHIMP_AUDIENCE_ID'),
    'doubleOptIn' => false
];