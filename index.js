const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0x0b2342, 1)
document.body.appendChild(renderer.domElement)
const texture = new THREE.TextureLoader().load("mundo.png")
const geometry = new THREE.SphereGeometry(1, 32, 16)
const material = new THREE.MeshBasicMaterial({ map: texture })
const sphere = new THREE.Mesh(geometry, material)
scene.add(sphere)
camera.position.z = 5

function animate() {
    requestAnimationFrame(animate)
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera)
}
animate()
