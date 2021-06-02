## Description
```
A simple API that manages color definitions. Each color has a name and a hex value. Your API should be responsible for the following things: list, create, and also delete colors. A frontend exists as well, that interacts with this API.
```

### Wireframe
- [Balsamiq](https://balsamiq.cloud/suqp2lc/pl95lyh)

## Plan

### Tasks
- Planning
  - Setup wireframe
  - Add initial README
- Setup
  - Setup local development environment
  - Setup laravel boilerplate
  - Setup React boilerplate
- Structure
  - Backend
    - Add Laravel models
      - Generate migrations
      - Add seed data
      - Native ORM methods can be utilized
    - Add Routes
    - Add Controllers

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
		- Offer OpenAPI supported documentation: [GitHub - DarkaOnLine/SwaggerLume: Lumen swagger](https://github.com/DarkaOnLine/SwaggerLume)
- **Database**
	- MySQL
		- Models
      - Color
        - Basic table with primary key and constraints
        - Columns
          - id (int) [primary, auto-increment]
          - hexcode (varchar(6)) [unique]
          - name (varchar(100)) [unique]
          - is_deleted (boolean)
			- Leverage migrations
			- Leverage Database seeding