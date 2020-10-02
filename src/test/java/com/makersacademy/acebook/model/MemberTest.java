package com.makersacademy.acebook.model;
import static org.hamcrest.CoreMatchers.containsString;
import static org.junit.Assert.*;
import org.junit.Test;
public class MemberTest {
    private Member member = new Member("Stryder@example.com", "Aragorn", "Arathorn", "aragorn");
    @Test
    public void postHasContent() {
        assertThat(member.getFirstName(), containsString("Aragorn"));
    }
}