<?php

return [
    'fields' => [
        'storyBuilder' => [
            'groups' => [
                [
                    'label' => 'Listicle',
                    'types' => [
                        'listicleSingleImage', 
                        'listicleImageSlider',
                        'listicleEmbed',
                        'listicleSingleProduct',
                        'listicleMultipleProductCarousel'
                    ]
                ],
                [
                    'label' => 'Story - Left',
                    'types' => [
                        'gallery', 
                        'slider', 
                        'embed' 
                    ]
                ],
                [
                    'label' => 'Story - Right',
                    'types' => [
                        'richTextEditor',
                        'introduction',
                        'blockquote',
                        'relatedStory', 
                        'form',

                    ]
                ]
            ],
            'hiddenTypes' => [
                'event', 
                'imageHotspot',
                'relatedSpa',
                'timeline',
                'qa'
            ]
        ]
    ]   
];