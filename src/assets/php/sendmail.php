<!-- if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(
        !empty($_POST['fname'])
        && !empty($_POST['email'])
        && !empty($_POST['subject'])
        && !empty($_POST['message'])
    ){
        $name = $_POST["fname"];
        $email = $_POST["email"];
        $subject = $_POST["subject"];
        $phone = $_POST["phone"];
        $message = $_POST["message"];


        $to = "nangolem@tcd.ie";
        $body = "Name: {$name}\nEmail: {$email}\nPhone: {$phone}\nMessage: {$message}";
        $headers = "From: {$email}";


        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send message.";
        }
    }
} -->
    echo "test";