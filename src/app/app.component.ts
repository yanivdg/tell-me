import { Component, OnInit, NgZone } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true
})
export class AppComponent implements OnInit {

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.createThreeJsBox();
  }

  createThreeJsBox(): void {
    const canvas = document.getElementById('canvas-box') as HTMLCanvasElement;
    canvas.width = window.innerWidth * 0.8; // Adjust canvas width to 80% of window width
    canvas.height = window.innerHeight * 0.8; // Adjust canvas height to 80% of window height
    let directionX = 1;
    let directionY = 1;
    if (!canvas) {
      return;
    }

    const renderer = new THREE.WebGLRenderer({ canvas });

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
    camera.position.z = 5;

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('https://cdn.jsdelivr.net/gh/yanivdg/tell-me@main/src/assets/tell-me.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const geometry = new THREE.BoxGeometry();

    //const cube = new THREE.Mesh(geometry, material);
    //scene.add(cube);

    const cubes: THREE.Mesh[] = [];

    for (let i = 0; i < 7; i++) {
      const cube = new THREE.Mesh(geometry, material);
      cube.position.x = Math.random() * 4 - 2; // Random x position between -2 and 2
      cube.position.y = Math.random() * 4 - 2; // Random y position between -2 and 2
      cube.position.z = Math.random() * 4 - 2; // Random z position between -2 and 2
      cubes.push(cube);
      scene.add(cube);
    }

    const animate = () => {
      this.ngZone.runOutsideAngular(() => {
        requestAnimationFrame(animate);
      });
    
      cubes.forEach(cube => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
    
      // Move the cube along the x-axis
      cube.position.x += directionX * 0.01;
      // Change direction when hitting the edge of the canvas
      if (cube.position.x >= canvas.width / 200 || cube.position.x <= -canvas.width / 200) {
        directionX *= -1;
      }
    
      // Move the cube along the y-axis
      cube.position.y += directionY * 0.01;
      // Change direction when hitting the edge of the canvas
      if (cube.position.y >= canvas.height / 200 || cube.position.y <= -canvas.height / 200) {
        directionY *= -1;
        
      }
      });
      renderer.render(scene, camera);
    };
    

    animate();
  }
}
