import 'package:flutter/material.dart';
import 'package:cubixd/cubixd.dart';
import 'package:flutter/services.dart';
import 'upload_form.dart';

void _openUploadForm(BuildContext context) {
  Navigator.pushReplacement(
    context,
    MaterialPageRoute(builder: (context) => UploadForm()),
  );
}



void main() {
  runApp(MyApp());
}

//
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: KeyboardListener(),
    );
  }
}

/*
class MyApp extends StatelessWidget {

    @override
  _KeyboardListenerState createState() => _KeyboardListenerState();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Expanded(child: CubeRotationDemo()),
            Expanded(child: CubeRotationDemo()),
            Expanded(child: CubeRotationDemo()),
            Expanded(child: CubeRotationDemo()),
            Expanded(child: CubeRotationDemo()),
          ],
        ),
      ),
    );
  }
}
*/
//
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
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('')),
      body: Center(
        child: RotationTransition(
          turns: _controller,
          child: AnimatedCubixD(
                onSelected: (SelectedSide opt) => opt == SelectedSide.bottom ? false : true,
                size: 150.0,
                left: Image.asset('TELLME.jpg'//Container(color: Colors.red, // Customize the left face
                ),
                front: Image.asset('TELLME.jpg'//Container(color: Colors.green, // Customize the front face
                ),
                back: Image.asset('TELLME.jpg'//Container(color: Colors.blue, // Customize the back face
                ),
                bottom: Image.asset('TELLME.jpg'//Container(color: Colors.yellow, // Customize the bottom face
                ),
                right: Image.asset('TELLME.jpg'//Container(color: Colors.purple, // Customize the right face
                ), 
                top: Image.asset('TELLME.jpg'//Container(color: Colors.cyan, // Customize the right face
                ),
              )

        ),
      ),
    );
  }
}


//
class KeyboardListener extends StatefulWidget {
  @override
  _KeyboardListenerState createState() => _KeyboardListenerState();
}

class _KeyboardListenerState extends State<KeyboardListener> {
  FocusNode _focusNode = FocusNode();

  @override
  void initState() {
    super.initState();
    _focusNode.requestFocus();
  }

  @override
  Widget build(BuildContext context) {
    return RawKeyboardListener(
      focusNode: _focusNode,
      onKey: (RawKeyEvent event) {
        if(event is RawKeyDownEvent) {
          print('Key pressed: ${event.logicalKey.keyLabel}');
          _openUploadForm(context);
        }
      },
      child: Scaffold(
        body: Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Expanded(child: CubeRotationDemo()),
            Expanded(child: CubeRotationDemo()),
            Expanded(child: CubeRotationDemo()),
            Expanded(child: CubeRotationDemo()),
            Expanded(child: CubeRotationDemo()),
          ],
        ),
      ),
    );
  }

  @override
  void dispose() {
    _focusNode.dispose();
    super.dispose();
  }
}


