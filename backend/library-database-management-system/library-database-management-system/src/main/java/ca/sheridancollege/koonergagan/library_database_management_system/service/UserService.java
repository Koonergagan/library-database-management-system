package ca.sheridancollege.koonergagan.library_database_management_system.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import ca.sheridancollege.koonergagan.library_database_management_system.entity.UserEntity;
import ca.sheridancollege.koonergagan.library_database_management_system.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

  
   
    public List<UserEntity> getAllUsers() {
        return userRepository.findAll();
    }

    public UserEntity saveUser(UserEntity user) {
        return userRepository.save(user);
    }
    public UserEntity getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

}
