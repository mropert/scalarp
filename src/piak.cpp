#include <iostream>

auto piak() {
	return []{ std::cout << "piak!" << std::endl; };
}

int main() {
	piak()();
	return 0;
}

