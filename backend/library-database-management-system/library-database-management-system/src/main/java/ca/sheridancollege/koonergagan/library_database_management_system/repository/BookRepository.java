package ca.sheridancollege.koonergagan.library_database_management_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ca.sheridancollege.koonergagan.library_database_management_system.entity.BookEntity;
@Repository
public interface BookRepository extends JpaRepository<BookEntity, Long> {

}
