import 'package:flutter/material.dart';
import 'package:flutter_cube/flutter_cube.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: CubeRotationDemo(), // Use your custom widget
    );
  }
}

class CubeRotationDemo extends StatefulWidget {
  @override
  _CubeRotationDemoState createState() => _CubeRotationDemoState();
}

class _CubeRotationDemoState extends State<CubeRotationDemo>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      vsync: this,
      duration: Duration(seconds: 5), // Set rotation duration
    )..repeat(); // Rotate indefinitely

    // Optionally, you can add more animations or customize the behavior here
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Automatic Cube Rotation')),
      body: Center(
        child: RotationTransition(
          turns: _controller,
          child: Cube(
            onSceneCreated: (Scene scene) {
              scene.world.add(Object(fileName: 'cube.obj'));
            },
          ),
        ),
      ),
    );
  }
}
