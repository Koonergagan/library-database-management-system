package ca.sheridancollege.koonergagan.library_database_management_system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import ca.sheridancollege.koonergagan.library_database_management_system.entity.BookEntity;
import ca.sheridancollege.koonergagan.library_database_management_system.repository.BookRepository;

@Service
public class BookService {
    @Autowired 
    private BookRepository bookRepository;

    public List<BookEntity> getAllBooks()
    {
        return bookRepository.findAll();
        
    }

    public BookEntity getBookById(Long id)
    {
        return bookRepository.findById(id).orElse(null);

    }

    public BookEntity saveBook(BookEntity book)
    {
        return bookRepository.save(book);
    }

    public void deleteBook(Long id)
    {
        bookRepository.deleteById(id);
    }
}
