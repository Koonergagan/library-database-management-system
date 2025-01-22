package ca.sheridancollege.koonergagan.library_database_management_system;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//import ca.sheridancollege.koonergagan.library_database_management_system.service.PasswordMigrationService;
import jakarta.annotation.PostConstruct;

@SpringBootApplication
public class LibraryDatabaseManagementSystemApplication {
//  @Autowired
//     private PasswordMigrationService passwordMigrationService;
	public static void main(String[] args) {
		SpringApplication.run(LibraryDatabaseManagementSystemApplication.class, args);
	}

	//  @PostConstruct
    // public void migratePasswordsOnStartup() {
    //     // Call the password migration method when the application starts
    //     passwordMigrationService.migratePasswords();
    // }

}
