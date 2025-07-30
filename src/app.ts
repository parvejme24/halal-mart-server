import 'express-async-errors';
import 'dotenv/config';
import express from 'express';
import path from 'path';

// Security middleware
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';

// Utility middleware
import compression from 'compression';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';



// Middleware imports
import { errorHandler } from './middleware/errorHandler';
import { notFound } from './middleware/notFound';

// Config imports
import { SESSION_CONFIG } from './config/secrets';

const app = express();

// ===== SECURITY MIDDLEWARE =====
app.use(helmet({ crossOriginEmbedderPolicy: false }));
app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'),
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'),
  message: { error: 'Too many requests from this IP, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000,
  delayAfter: 50,
  delayMs: () => 500,
});

app.use('/api/', limiter, speedLimiter);

// Data sanitization
app.use(hpp());
app.use(mongoSanitize());
app.use(xss());

// ===== BODY PARSING =====
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// ===== SESSION & COOKIES =====
app.use(cookieParser());
app.use(session({
  secret: SESSION_CONFIG.secret,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  },
}));

// ===== PERFORMANCE & LOGGING =====
app.use(compression());
app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'combined'));

// ===== STATIC FILES =====
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// ===== ROUTES =====
// Home route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to Alhamdulillah Bazar',
    version: '1.0.0',
    status: 'running'
  });
});

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
    version: process.env.npm_package_version || '1.0.0',
  });
});


// ===== ERROR HANDLING =====
app.use(notFound);
app.use(errorHandler);

export default app;