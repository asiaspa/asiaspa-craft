<?php

return [
    'fields' => [
        'storyBuilder' => [
            'groups' => [
                [
                    'label' => 'Listicle',
                    'types' => [
                        'listicleImage', 
                        'listicleSlider',
                        'listicleEmbed',
                        'listicleShopItem',
                        'listicleShopCarousel'
                    ]
                ],
                [
                    'label' => 'Story',
                    'types' => [
                        'richTextEditor',
                        'gallery', 
                        'slider', 
                        'embed', 
                        'qa', 
                        'blockquote', 
                        'form', 
                        'event', 
                        'imageHotspot'
                    ]
                ],
                [
                    'label' => 'Relation',
                    'types' => [
                        'relatedStory', 
                        'relatedSpa'
                    ]
                ]
            ],
            'hiddenTypes' => [
                'form', 
                'qa',
                'event', 
                'imageHotspot',
                'relatedSpa', 
                'blockquote'
            ]
        ]
    ]   
];