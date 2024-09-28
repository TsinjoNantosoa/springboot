package com.springwithtsinjo.fullstackReactAndSpringBoot.exception;

public class UserNotFoundException extends  RuntimeException{


    public  UserNotFoundException(Long id){
        super("we couldn't found the user with this id  " + id );
    }
}
