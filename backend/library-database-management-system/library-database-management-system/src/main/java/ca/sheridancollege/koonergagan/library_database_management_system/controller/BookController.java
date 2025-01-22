package ca.sheridancollege.koonergagan.library_database_management_system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.sheridancollege.koonergagan.library_database_management_system.entity.BookEntity;

import ca.sheridancollege.koonergagan.library_database_management_system.service.BookService;
@RestController
@RequestMapping("/books")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
public class BookController {
    @Autowired
    private BookService bookService;

    @GetMapping
    public List<BookEntity> getBooks() {
        return bookService.getAllBooks();
    }

    @PostMapping
    public BookEntity addBook(@RequestBody BookEntity book) {
        return bookService.saveBook(book);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
        return ResponseEntity.ok("Book deleted successfully");
    }
}


