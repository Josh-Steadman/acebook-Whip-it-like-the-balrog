package com.makersacademy.acebook.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.makersacademy.acebook.model.Member;

public interface MemberDAO extends JpaRepository<Member, String> {

    Member findByEmail(String email);

}
