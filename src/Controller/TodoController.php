<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TodoController extends AbstractController {

   public function __invoke ($data) {

      dd($data);
      return $data;
   }


   #[Route( '/todos/{reactRouting}', name: 'app_todos', defaults: ['reactRouting' => null] )]
   public function todo () : Response {
      return $this -> render('todos/todos.html.twig');
   }

}