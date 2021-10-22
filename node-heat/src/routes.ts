import { Router } from "express";
import { AuthenticateUserControler } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { Get3LastMessagesController } from "./controllers/GetLast3MessagesController";
import { ProfileUserControler } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router()

router.post("/authenticate", new AuthenticateUserControler().handle)

/* // Reque a key informada pela rota /github 
   {
    "code": "KEY GERADA"
   }
   
*/

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle)

/* // Requer o token gerado acima no Bearer
   {
      "message": "Qualquer coisa"
   }
*/

router.get("/messages/last3", new Get3LastMessagesController().handle)

router.get("/profile", ensureAuthenticated ,new ProfileUserControler().handle)

export { router }