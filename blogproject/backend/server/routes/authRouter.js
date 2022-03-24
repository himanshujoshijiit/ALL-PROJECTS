import authRouter from './authRouter'
import authCtrl from '../controllers/authCtrl'
import {validRegister} from '../middleware/valid'
 
const router = express.router()

router.post('/register',validRegister,authCtrl.register)

export default router;