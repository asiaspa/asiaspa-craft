# Brief
Asiaspa website revamp project

## TODO
- [ ] Refine Color Palette - most are not needed
- [ ] Gmail sent/reply issue 
- [ ] Register-service-worker
- [ ] criticalcss
- [ ] logo -> svg insert
- [ ] slim the swiper js
- [ ] searchit template query predefined
- [ ] pagebulder - flip gallery

## Development Guideline
### Twig Template Development
#### File naming
All file name must be `_{{ name }}.twig`
For AMP, append `-amp` at the name. i.e. `_{{ name }}-amp.twig`
The `_` enforcement implies all pages must be managed through the backend for better content maintainence.
e.g.  HTTP: `_homepage.twig`, AMP: `_homepage-amp.twig`

#### Usage of `extends`, `embed`, `include`, `macro` and `source`
The folder structure and templates follow the following structure
1. `extends` - to compose the frame of the page
2. `embed` - to wrap the content in a container 
3. `include` - to inject components
4. `macro` - don't use macro. use `{% include {{  }} with { variable : value} only %}` instead.
4. `source` - to directly inject code without processing with twig

## Security Protocol & Account Management
Passwords is managed via Lastpass with 1 master password.
1. Craft ID / Craft Cloud
2. Google Cloud (removed)
3. Imgix (removed)
4. Runcloud
5. Amazon AWS
6. workbox  


## Billing & Invoice 
- [ ] Google Cloud Storage reset contact & billing informaiton

### One off Service Fee
1. Runcloud subscription - July - paid by TRAVERSE - $8 USD

### Application Cost for quotation part II
1. Craft CMS License (1 Year update)
2. Map (1 Year update, $49)


### Monthly Recurring Cost
1. Hyperlane hosting server fee
2. Google Cloud asset storage fee
3. Google Map API (if over the API Access limit)
4. Imgix Image Transform Content Delivery Service service fee (min $10 / month)
5. Netlify Content Delivery + Caching service fee
6. 

### Yearly Recurring Cost
