<?php

    $con = new mysqli("localhost", "root", "", "ano_novo");

    if ($con -> connect_error){
        die ("Erro de conexão".$con -> connect_error);
    };

    $nome = $_POST['nome'] ?? '';
    $email = $_POST ['email'] ?? '';
    $senha =$_POST ['senha'] ??'' ;

    var_dump($nome, $email, $senha)

    $sql = "INSERT INTO dados (nome,email,senha) VALUES ('$nome', '$email', '$senha')";

    if ($con->query($sql) == TRUE){
        echo ("Dados inseridos com sucesso");
    }else{
        echo ("Erro: ". $con->error);
    };
?>