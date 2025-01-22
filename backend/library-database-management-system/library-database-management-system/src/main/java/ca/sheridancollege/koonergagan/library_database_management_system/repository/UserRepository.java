package ca.sheridancollege.koonergagan.library_database_management_system.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ca.sheridancollege.koonergagan.library_database_management_system.entity.UserEntity;
@Repository 
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    UserEntity findByUsername(String username);
    
    Optional<UserEntity> findByEmail(String email);

}
