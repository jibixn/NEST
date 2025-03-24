<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conformation</title>
</head>

<body>
    <?php

    /* $server = 'localhost';
    $user = 'root';
    $pass = '';
    $db = 'csd8';

    $conn = mysqli_connect($server, $user, $pass, $db);
    if (!$conn) {
        die('Connection failed' . mysqli_connect_error());
    } else {
        echo 'Connected';
    }
    $sql1 = "CREATE TABLE ACCOUNTS(UNAME VARCHAR(20),
    GENDER VARCHAR(20),
    EMAIL VARCHAR(100),
    PH INT,
    ACC INT,
    PASS INT,
    AMOUNT INT)";



    if (mysqli_query($conn, $sql1)) {
        echo "Connected successfull" . "<br>";
    } else {
        echo ".<br>";
    }
    mysqli_close($conn);*/
    ?>

    <?php
    $name = $_GET['name'];
    $gender = $_GET['gender'];
    $email = $_GET['email'];
    $phn = $_GET['phn'];
    $accno = $_GET['accno'];
    $password = $_GET['password'];
    $amount = $_GET['amount'];

    $server = 'localhost';
    $user = 'root';
    $pass = '';
    $db = 'csd8';

    $conn = mysqli_connect($server, $user, $pass, $db);
    if (!$conn) {
        die('Connection failed' . mysqli_connect_error());
    } else {
        echo 'Connected';
    }

    $sql2 = "INSERT INTO ACCOUNTS(UNAME,GENDER,EMAIL,PH,ACC,PASS,AMOUNT)
    VALUES('$name','$gender','$email','$phn','$accno','$password','$amount')";

    if (mysqli_query($conn, $sql2)) {
        echo "added successfull" . "<br>";
    } else {
        die('Errror');
    }

    mysqli_close($conn);


    ?>
</body>

</html>