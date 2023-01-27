import { Routers } from "../../core";
import { upload } from "../../utils";
import MediaControllers from "./mediaControllers";

class MediaRouter extends Routers {
  getMethods(): void {
    this.router.get("/", MediaControllers.getAllMedias);
    this.router.get("/find", MediaControllers.getMediaById);
  }
  postMethods(): void {
    this.router.post(
      "/upload",
      upload.single("image"),
      MediaControllers.uploadNewMedia
    );
  }
  putMethods(): void {}
  deleteMethods(): void {}
}

export default new MediaRouter().router;
