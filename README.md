## Description
```
A simple API that manages color definitions. Each color has a name and a hex value. Your API should be responsible for the following things: list, create, and also delete colors. A frontend exists as well, that interacts with this API.
```

### Wireframe
- [Balsamiq](https://balsamiq.cloud/suqp2lc/pl95lyh)

### Task management
- [Trello](https://trello.com/invite/b/tpBSNlwe/b87ed87df9b6affcaaf178c74277bcda/color-manager)

### Source control
- [Github](https://trello.com/invite/b/tpBSNlwe/b87ed87df9b6affcaaf178c74277bcda/color-manager)

## Plan

### Tasks
- Planning [CORE]
  - Setup wireframe
  - Add initial README
    - Mention all high level tasks to plan development
- Setup [CORE]
  - Setup local development environment
  - Setup laravel boilerplate
  - Setup React boilerplate
  - Trello Tasks
- Structure [CORE]
  - Backend
    - Add Laravel models
      - Generate migrations
      - Add seed data
      - Native ORM methods can be utilized
    - Add Routes
    - Add Controllers
      - Basic validation
  - Front end
    - Add React components
      - Components
        - Outer Container
        - Color blocks
        - New color/Edit color form
          - Form
          - Color picker
      - State based AJAX calls
    - Styling
      - Use Semantic UI
- [ADDITIONAL]
  - Unit Tests
- Deployment [If time permits]
  - Use Laravel Forge to deploy without hassle
- Best practices [Whatever can achieved, remaining will be listed here]
  - Incorporate standard coding practices
    - Standard coding convention
      - PHP [PSR-2]
      - React: Use functional components with hooks
      - Database: Use ORM methods
      - Forms, AJAX calls: Avoid XSS, use CSRF token (already used by Laravel)
      - Produce/Consume JSON
      - Return valid HTTP status codes with messages
      - Sufficient form validations
        - Empty/invalid/duplicate values
        - AJAX failures

### Components
- **Frontend**
	- Framework: React
		- Leverage React Hooks
		- AJAX calls can be stitched to hooks and automatically called
		- UI
			- Beautiful presentable UI
			- Color Blocks with border
		- UX
			- Focus on hover
			- Render “options” on hover
			- [Bonus] Placeholder UI to load
```

```
- **Backend**
	- Framework: Laravel
  	- Disclaimer: A much lighter framework (Zend Slim, Lumen or a Custom MVC) could've been used. Laravel is used for quick development and stable dependencies.
		- Standard MVC routes
			- `GET /api/colors`
			- `GET /api/colors/:colorId`
			- `POST /api/colors/:colorId`
			- `PUT /api/colors/:colorId`
			- `DELETE /api/colors/:colorId`
			- Optional
				- `GET /api/colors/search/:searchTerm`
		- Offer OpenAPI supported documentation: [L5-Swagger](https://github.com/DarkaOnLine/L5-Swagger)
- **Database**
	- MySQL
		- Models
      - Color
        - Basic table with primary key and constraints
        - Columns
          - id (int) [primary, auto-increment]
          - hex (varchar(6)) [unique]
          - name (varchar(100)) [unique]
          - is_deleted (boolean)
			- Leverage migrations
			- Leverage Database seeding