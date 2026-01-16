mern-portfolio/
│
├── README.md
├── .gitignore
├── docker-compose.yml          # optional (local full-stack dev)
│
├── backend/
│   ├── package.json
│   ├── package-lock.json
│   ├── .env.example
│   ├── .env
│   ├── nodemon.json
│   │
│   ├── src/
│   │   ├── server.js
│   │   ├── app.js
│   │   │
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   └── env.js
│   │   │
│   │   ├── models/
│   │   │   ├── User.model.js
│   │   │   ├── Project.model.js
│   │   │   ├── Experience.model.js
│   │   │   ├── Skill.model.js
│   │   │   └── ContactMessage.model.js
│   │   │
│   │   ├── routes/
│   │   │   ├── public.routes.js
│   │   │   ├── auth.routes.js
│   │   │   └── admin.routes.js
│   │   │
│   │   ├── controllers/
│   │   │   ├── public.controller.js
│   │   │   ├── auth.controller.js
│   │   │   └── admin.controller.js
│   │   │
│   │   ├── services/
│   │   │   ├── project.service.js
│   │   │   ├── experience.service.js
│   │   │   ├── skill.service.js
│   │   │   └── contact.service.js
│   │   │
│   │   ├── middlewares/
│   │   │   ├── auth.middleware.js
│   │   │   ├── error.middleware.js
│   │   │   └── validate.middleware.js
│   │   │
│   │   ├── utils/
│   │   │   ├── logger.js
│   │   │   ├── response.js
│   │   │   └── hash.js
│   │   │
│   │   └── constants/
│   │       └── roles.js
│   │
│   └── tests/                  # optional (future)
│
├── frontend/
│   ├── package.json
│   ├── package-lock.json
│   ├── .env.example
│   ├── .env
│   │
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── main.jsx / index.jsx
│   │   ├── App.jsx
│   │   │
│   │   ├── assets/
│   │   │   └── images/
│   │   │
│   │   ├── layouts/
│   │   │   ├── PublicLayout.jsx
│   │   │   └── AdminLayout.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Admin/
│   │   │       ├── Login.jsx
│   │   │       ├── Dashboard.jsx
│   │   │       └── ManageProjects.jsx
│   │   │
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Loader.jsx
│   │   │   │   ├── ErrorBoundary.jsx
│   │   │   │   └── ProtectedRoute.jsx
│   │   │   │
│   │   │   ├── hero/
│   │   │   ├── skills/
│   │   │   ├── experience/
│   │   │   ├── projects/
│   │   │   └── contact/
│   │   │
│   │   ├── services/
│   │   │   ├── apiClient.js
│   │   │   ├── public.service.js
│   │   │   └── admin.service.js
│   │   │
│   │   ├── hooks/
│   │   │   ├── useFetch.js
│   │   │   └── useAuth.js
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── utils/
│   │   │   └── formatters.js
│   │   │
│   │   └── routes/
│   │       └── AppRoutes.jsx
│   │
│   └── tests/                  # optional
│
└── docs/
    ├── architecture.md
    ├── api-contracts.md
    └── deployment.md
