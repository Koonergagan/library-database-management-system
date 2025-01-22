package ca.sheridancollege.koonergagan.library_database_management_system.controller;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ca.sheridancollege.koonergagan.library_database_management_system.entity.UserEntity;
import ca.sheridancollege.koonergagan.library_database_management_system.service.UserService;


@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public List<UserEntity> getUsers() {
        return userService.getAllUsers();
    }
    // Add this to your UserController class

@GetMapping("/profile")
@CrossOrigin(origins = "http://localhost:3000") 
public ResponseEntity<?> getUserProfile(@RequestParam String username) {
    try {
        UserEntity existingUser = userService.getUserByUsername(username);
        if (existingUser != null) {
            // Only return the necessary fields
            return ResponseEntity.ok(existingUser);
            
        
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error fetching profile data");
    }
}

    @PostMapping
    public UserEntity addUser(@RequestBody UserEntity user) {
        return userService.saveUser(user);
    }
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserEntity user) {
        try {
            UserEntity savedUser = userService.saveUser(user);
            return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(savedUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"message\": \"Registration failed\"}");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserEntity user) {
        System.out.println("Login request received with username: ");
        UserEntity existingUser = userService.getUserByUsername(user.getUsername());
       
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            return ResponseEntity.ok("Login successful");
           
      
        }
        return ResponseEntity.status(401).body("Invalid credentials");
    }
}
