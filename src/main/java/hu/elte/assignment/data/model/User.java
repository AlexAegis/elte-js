package hu.elte.assignment.data.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.Entity;
import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import static java.util.Objects.requireNonNull;

@Entity
// @Data
@Getter
@Setter
@ToString
@XmlRootElement
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class User extends Base implements UserDetails, Serializable {

	private static final long serialVersionUID = 6862128773568482456L;

	private String username;

	private String password;

	private Boolean active = true;

	@Builder
	@JsonCreator
	public User(@JsonProperty("username") final String username, @JsonProperty("password") final String password) {
		super();
		this.username = requireNonNull(username);
		this.password = requireNonNull(password);
	}

	@Override
	public Collection<GrantedAuthority> getAuthorities() {
		return Arrays.asList(() -> "admin", () -> "pirate");
	}

	@JsonIgnore
	@Override
	public String getPassword() {
		return password;
	}

	@JsonIgnore
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@JsonIgnore
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@JsonIgnore
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return active;
	}

}
