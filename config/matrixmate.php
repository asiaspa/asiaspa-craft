<?php

return [
    'fields' => [
        'storyBuilder' => [
            'groups' => [
                [
                    'label' => 'Listicle',
                    'types' => ['listicleGallery', 'listicleSlider', 'listicleEmbed' ]
                ],
                [
                    'label' => 'Story',
                    'types' => ['richTextEditor','gallery', 'slider', 'embed', 'qa', 'blockquote', 'form', 'event', 'imageHotspot']
                ],
                [
                    'label' => 'Relation',
                    'types' => ['relatedStory', 'relatedSpa']
                ]
            ]
        ]
    ]   
];