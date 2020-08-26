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
                        '56tr4', 
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