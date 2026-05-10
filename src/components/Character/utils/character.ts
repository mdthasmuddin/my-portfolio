import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc",
          "Character3D#@"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);
            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;

                // Apply custom colors based on node names
                const skinNodes = ["Cube.002", "Ear.001", "Hand", "Neck"];
                const blackClothes = ["BODY.SHIRT", "Pant"];
                
                if (skinNodes.includes(child.name)) {
                  mesh.material = (mesh.material as THREE.MeshStandardMaterial).clone();
                  (mesh.material as THREE.MeshStandardMaterial).color.set("#C78D75");
                } else if (blackClothes.includes(child.name)) {
                  mesh.material = (mesh.material as THREE.MeshStandardMaterial).clone();
                  (mesh.material as THREE.MeshStandardMaterial).color.set("#111111");
                } else if (child.name === "hair") {
                  mesh.material = (mesh.material as THREE.MeshStandardMaterial).clone();
                  (mesh.material as THREE.MeshStandardMaterial).color.set("#050505");
                } else if (child.name === "Plane.007") { // Hat
                  mesh.material = (mesh.material as THREE.MeshStandardMaterial).clone();
                  (mesh.material as THREE.MeshStandardMaterial).color.set("#E5E5E5"); // White-ish hat
                } else if (child.name === "Shoe" || child.name === "Sole") {
                  mesh.material = (mesh.material as THREE.MeshStandardMaterial).clone();
                  (mesh.material as THREE.MeshStandardMaterial).color.set("#FFFFFF");
                }
              }
            });
            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;
            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
