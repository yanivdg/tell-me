import 'package:flutter/material.dart';
import 'package:file_picker/file_picker.dart';

class UploadForm extends StatefulWidget {
  @override
  _UploadFormState createState() => _UploadFormState();
}

class _UploadFormState extends State<UploadForm> {
  FilePickerResult? _file;

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text('Upload a picture'),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text('Select an image to upload.'),
          ElevatedButton(
            onPressed: () async {
              FilePickerResult? result = await FilePicker.platform.pickFiles(type: FileType.image);

              if(result != null) {
                setState(() {
                  _file = result;
                });
              }
            },
            child: Text('Select Image'),
          ),
          if (_file != null)
            Text('Selected file: ${_file!.files.single.name}'),
        ],
      ),
    );
  }
}
