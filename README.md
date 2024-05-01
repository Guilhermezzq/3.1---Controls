
# PresentationControls and Basic Properties

This repository provides a simple yet powerful tool for rotating models or objects during presentations and ensuring they return to their initial position when released.

The PresentationControls component from @react-three/drei package enables smooth rotation of 3D objects within a scene, enhancing the presentation experience.

# Basic Properties:
global: Specifies whether the rotation should be applied globally or locally to the object.

polar: Defines the polar angle range for vertical rotation.

azimuth: Defines the azimuth angle range for horizontal rotation.

config: Configuration options for the animation behavior, allowing users to control physical properties like mass and tension. This adds a realistic feel to the animations.

snap: Configuration for snapping the object back to its original position after release, specifying properties like mass and tension.


# How to Use:

### Install the @react-three/drei package.
Import the PresentationControls component into your React application.

Wrap the desired 3D object or mesh with the PresentationControls component.

Adjust the properties (global, polar, azimuth, config, snap) according to your presentation needs.

Run your application to see the presentation controls in action.

Run this followed commands:

``` terminal
# Install dependencies (only the first time)
npm install @react-three/fiber
npm install @react-three/drei

# Run the local server at http://localhost:3000/
npm start
