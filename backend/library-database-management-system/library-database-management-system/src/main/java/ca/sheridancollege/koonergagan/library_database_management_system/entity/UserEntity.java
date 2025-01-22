package ca.sheridancollege.koonergagan.library_database_management_system.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;


@Data
@AllArgsConstructor
@NoArgsConstructor  // Default constructor for JPA (required by Hibernate)
@RequiredArgsConstructor  // Constructor for required fields only

@Entity
@Table(name = "users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull 
    private String username;
    @NonNull
    private String password;
    @NonNull
    private String email;
    @NonNull
    private String role; // Role can be 'ADMIN' or 'USER'

    // Lombok will generate the constructors, getters, setters, toString, etc.
}
