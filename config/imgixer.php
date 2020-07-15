<?php
return [
    'sources' => array(
        'base' => array(
             // The imgix source domain.
            'domain'   => 'asiaspa.imgix.net',
            // Optionally specify a subfolder path to prefix generated URLs.
            'subfolder' => '', 
            // The private Imgix key used to sign images. 
            // Get this from the source details screen in Imgix.com
            'key'   => 'rR8eGFaeXzU763Yx',
            
            // Define any default parameters here:
            'defaultParams' => array(
                'auto' => 'compress,format',
                'fit' => 'crop',
                'step' => '320'
            )
        ),
    )
];