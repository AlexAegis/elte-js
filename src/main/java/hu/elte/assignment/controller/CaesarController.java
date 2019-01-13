package hu.elte.assignment.controller;

import hu.elte.assignment.api.Response;
import lombok.experimental.FieldDefaults;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static lombok.AccessLevel.PRIVATE;

@RestController
@RequestMapping("/rest/caesar")
@FieldDefaults(level = PRIVATE, makeFinal = true)
public class CaesarController {

	@PreAuthorize("hasAuthority('USER')")
	@GetMapping("/{seed}")
	public ResponseEntity<Response<Integer>> getKey(@PathVariable("seed") String seed) {
		return ResponseEntity.ok(Response.<Integer>builder().data(seed.chars().sum()).build());
	}

}
