# 🛒 Alhamdulillah Bazar - E-commerce API

A modern, secure, and scalable e-commerce REST API built with Node.js, Express, TypeScript, and MySQL.

## ✨ Features

- 🔐 **Authentication & Authorization** - JWT-based authentication with role-based access control
- 🛍️ **Product Management** - Complete CRUD operations for products with categories and brands
- 🛒 **Shopping Cart** - Add, update, and remove items from cart
- 📦 **Order Processing** - Create and manage orders with status tracking
- 💳 **Payment Integration** - Ready for payment gateway integration
- 📁 **File Upload** - Secure file upload with validation
- 🛡️ **Security Features** - Rate limiting, CORS, Helmet, XSS protection, SQL injection prevention
- 📊 **Logging** - Comprehensive logging with Winston
- 🧪 **Testing Ready** - Jest and Supertest setup
- 🗄️ **Database** - MySQL with Prisma ORM
- ☁️ **Cloud Ready** - Optimized for TiDB Cloud deployment

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- MySQL database (or TiDB Cloud)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd alhamdulillah-bazar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your configuration:
   ```env
   NODE_ENV=development
   PORT=4040
   DATABASE_URL=mysql://username:password@host:port/database?ssl={"rejectUnauthorized":true}
   JWT_SECRET=your-super-secret-jwt-key
   SESSION_SECRET=your-session-secret
   ```

4. **Database Setup**
   ```bash
   # Generate Prisma client
   npm run prisma:generate
   
   # Run migrations
   npm run prisma:migrate
   
   # Seed database (optional)
   npm run prisma:seed
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

The server will start at `http://localhost:4040`

## 📁 Project Structure

```
alhamdulillah-bazar/
├── src/
│   ├── config/
│   │   ├── database.ts      # Database configuration
│   │   └── secrets.ts       # Sensitive configuration
│   ├── middleware/
│   │   ├── auth.ts          # Authentication middleware
│   │   ├── errorHandler.ts  # Global error handling
│   │   └── notFound.ts      # 404 handler
│   ├── routes/
│   │   ├── auth.ts          # Authentication routes
│   │   ├── product.ts       # Product routes
│   │   ├── category.ts      # Category routes
│   │   ├── order.ts         # Order routes
│   │   ├── cart.ts          # Cart routes
│   │   ├── user.ts          # User routes
│   │   ├── upload.ts        # File upload routes
│   │   └── payment.ts       # Payment routes
│   ├── utils/
│   │   └── logger.ts        # Winston logger
│   ├── types/
│   │   └── global.d.ts      # TypeScript declarations
│   ├── app.ts               # Express app setup
│   └── index.ts             # Server entry point
├── prisma/
│   └── schema.prisma        # Database schema
├── uploads/                 # File upload directory
├── .env                     # Environment variables
├── .env.example            # Environment template
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm test` | Run tests |
| `npm run prisma:generate` | Generate Prisma client |
| `npm run prisma:migrate` | Run database migrations |
| `npm run prisma:studio` | Open Prisma Studio |
| `npm run prisma:seed` | Seed database |
| `npm run db:test` | Test database connection |

## 🔌 API Endpoints

### Base URL: `http://localhost:4040`

#### Public Routes
- `GET /` - Welcome page
- `GET /health` - Health check
- `GET /api` - API documentation
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/categories` - Get all categories

#### Protected Routes (Require Authentication)
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/cart` - Get cart items
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove cart item
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create order
- `GET /api/wishlist` - Get wishlist
- `POST /api/upload/single` - Upload single file
- `POST /api/upload/multiple` - Upload multiple files

## 🗄️ Database Schema

### Core Models
- **User** - User accounts and profiles
- **Product** - Product information with variants
- **Category** - Product categories
- **Brand** - Product brands
- **Order** - Customer orders
- **OrderItem** - Order line items
- **Cart** - Shopping cart items
- **Wishlist** - User wishlist items
- **Review** - Product reviews
- **Image** - Product images

## 🔐 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Rate Limiting** - Prevent abuse with request limiting
- **CORS Protection** - Cross-origin resource sharing control
- **Helmet** - Security headers
- **XSS Protection** - Cross-site scripting prevention
- **SQL Injection Prevention** - Parameterized queries with Prisma
- **Input Validation** - Request data validation
- **File Upload Security** - Secure file handling

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 🚀 Deployment

### Environment Variables for Production

```env
NODE_ENV=production
PORT=4040
DATABASE_URL=your-production-database-url
JWT_SECRET=your-production-jwt-secret
SESSION_SECRET=your-production-session-secret
CORS_ORIGIN=https://yourdomain.com
RATE_LIMIT_MAX_REQUESTS=100
RATE_LIMIT_WINDOW_MS=900000
```

### Build and Deploy

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Contact the development team

## 🙏 Acknowledgments

- Built with ❤️ for the Muslim community
- Powered by Node.js, Express, TypeScript, and MySQL
- Special thanks to all contributors and supporters

---

**Alhamdulillah Bazar** - Your Trusted E-commerce Platform 🛒 