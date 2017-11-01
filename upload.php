<?php
$target_dir = "uploads/";
$target_file = $target_dir. basename($_FILES["FileToUpload"]["name"]);
$uploadOk = 1;
$DocumanetFileType = pathinfo ($target_file, PATHINFO_EXTENSION);
if (isset ($POST["submit"])) { $check = getimagesize ($FILES ["FileToUpload"]
["tmp_name"]);
if($check != false) { 
echo "File is an image - ". $check["mine"] . ".";
$uploadOk = 1;
} else {
echo "File is not an image.";
$uploadOk = 0;
}
}
?>
