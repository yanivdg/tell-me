
import 'package:flutter/material.dart';
import 'package:vector_math/vector_math.dart' as math; // for rotations

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter 3D Cubes (2.5D)',
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> with TickerProviderStateMixin {
  late AnimationController _animationController;
  double _rotationX = 0.0;
  double _xPos = 0.0;

  @override
  void initState() {
    super.initState();
    _animationController = AnimationController(
      duration: Duration(seconds: 3),
      vsync: this,
    )..repeat();

    _animationController.addListener(() {
      setState(() {
        _rotationX = _animationController.value * 360.0; // Rotate on X-axis
        _xPos = 100.0 * _animationController.value * 2.0 - 100.0; // Move side-to-side
      });
    });
  }

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(''),
      ),
      body: Stack(
        children: [
          AnimatedPositioned(
            top: 50.0, // Adjust vertical position as needed
            left: _xPos,
            duration: Duration(seconds: 3),
            child: Transform(
              alignment: Alignment.center,
              transform: Matrix4.identity()..rotateX(math.radians(_rotationX)),
              child: Container(
                width: 200.0,
                height: 200.0,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10.0),
                  image: DecorationImage(
                    image: AssetImage('TELLME.jpg'),
                    fit: BoxFit.cover,
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
