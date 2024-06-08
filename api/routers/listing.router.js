import express from 'express'
import {verifyToken} from '../utils/verifyUser.js'
// import {CreateListing} from '../../client/src/pages/CreateListing.jsx';
import { createListing } from '../controllers/listing.controller.js';
const router = express.Router();

router.post('/create', verifyToken,createListing );
export default router;