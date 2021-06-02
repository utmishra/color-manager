## Description
```
A simple API that manages color definitions. Each color has a name and a hex value. Your API should be responsible for the following things: list, create, and also delete colors. A frontend exists as well, that interacts with this API.
```

## Plan
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
- **Database**
	- MySQL
		- Models
      - Color
			- Basic table with primary key and constraints
			- Leverage migrations
			- Leverage Database seeding
```

```
- **Backend**
	- Framework: Laravel
		- Standard MVC routes
			- `GET /api/colors`
			- `GET /api/colors/:colorId`
			- `POST /api/colors/:colorId`
			- `PUT /api/colors/:colorId`
			- `DELETE /api/colors/:colorId`
			- Optional
				- `GET /api/colors/search/:searchTerm`
		- Offer OpenAPI supported documentation: [GitHub - DarkaOnLine/SwaggerLume: Lumen swagger](https://github.com/DarkaOnLine/SwaggerLume)