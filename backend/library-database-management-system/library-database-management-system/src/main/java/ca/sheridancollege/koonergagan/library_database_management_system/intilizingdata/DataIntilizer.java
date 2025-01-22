package ca.sheridancollege.koonergagan.library_database_management_system.intilizingdata;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import ca.sheridancollege.koonergagan.library_database_management_system.entity.BookEntity;
import ca.sheridancollege.koonergagan.library_database_management_system.entity.UserEntity;
import ca.sheridancollege.koonergagan.library_database_management_system.repository.BookRepository;
import ca.sheridancollege.koonergagan.library_database_management_system.repository.UserRepository;
@Component
public class DataIntilizer implements CommandLineRunner {
    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
        
        initializeUsers();
        initializeBooks();// Add sample books
     } 
     private void initializeUsers() {
            if (userRepository.count() == 0) {
                UserEntity user1 = new UserEntity("admin", "admin123", "admin@example.com", "ADMIN");
                UserEntity user2 = new UserEntity("user", "user123", "user@example.com", "USER");
                UserEntity user3 = new UserEntity("gagan", "gagan123", "gagan@example.com", "USER");
                userRepository.save(user1);
                userRepository.save(user2);
                userRepository.save(user3);
    
                System.out.println("Sample users initialized.");
            } else {
                System.out.println("Users already exist. Skipping initialization.");
            }
        }
    
        private void initializeBooks() {
            if (bookRepository.count() == 0) {
                BookEntity book1 = new BookEntity("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", "Fiction", true);
                BookEntity book2 = new BookEntity("1984", "George Orwell", "9780451524935", "History", true);
                BookEntity book3 = new BookEntity("The Catcher in the Rye", "J.D. Salinger", "9780316769488", "Fiction", true);
                BookEntity book4 = new BookEntity("To Kill a Mockingbird", "Harper Lee", "9780061120084", "Fiction", true);
                BookEntity book5 = new BookEntity("Animal Farm", "George Orwell", "9780451526342", "History", true);
                bookRepository.save(book1);
                bookRepository.save(book2);
                bookRepository.save(book3);
                bookRepository.save(book4);
                bookRepository.save(book5);
                
    
                System.out.println("Sample books initialized.");
            } else {
                System.out.println("Books already exist. Skipping initialization.");
            }
        }

    }

