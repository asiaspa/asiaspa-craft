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
                        'introduction',
                        'gallery', 
                        'slider', 
                        'embed', 
                        'blockquote',
                    ]
                ],
                [
                    'label' => 'Relation',
                    'types' => [
                        'relatedStory', 
                    ]
                ]
            ],
            'hiddenTypes' => [
                'form', 
                'qa',
                'event', 
                'imageHotspot',
                'relatedSpa', 
            ]
        ]
    ]   
];